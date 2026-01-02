import { useState, useEffect } from 'react';
import { useUser } from "@lib/providers/authProvider";
import { useRouter } from "next/navigation";
import { fetchWithAuth } from '@lib/auth/api-client';

export default function RoleSwitcher({ onRoleChange} : { onRoleChange: () => void}) {
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const { user, refreshUser, roles, profile, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    setActiveRole(profile?.active_role || null);
  }, [profile])

  const handleSwitch = async (role: string) => {
    if (!user) return;
    
    try {
      await fetchWithAuth('/api/user/profile', {
        method: 'PATCH',
        body: JSON.stringify({ active_role: role }),
      });
      
      setActiveRole(role);
      await refreshUser();
      onRoleChange();
      router.push('/account');
    } catch (error) {
      console.error('Failed to update active role:', error);
    }
  };

  if (roles.length === 1) return

  if (loading) {
    return (
      <div className="flex items-center space-x-2">
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-600 border-t-transparent"></div>
        <span className="text-gray-600 text-sm">Loading roles...</span>
      </div>
    );
  }

  return (
    roles.map(role => {
      return (
        <button key={role} className="hover:underline group rounded-lg px-3.5 py-2.5 focus:outline-hidden sm:px-3 sm:py-1.5 text-left text-base/6 text-zinc-950 sm:text-sm/6 forced-colors:text-[CanvasText] data-focus:bg-blue-500 data-focus:text-white data-disabled:opacity-50 forced-color-adjust-none forced-colors:data-focus:bg-[Highlight] forced-colors:data-focus:text-[HighlightText] forced-colors:data-focus:*:data-[slot=icon]:text-[HighlightText] col-span-full grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] items-center supports-[grid-template-columns:subgrid]:grid-cols-subgrid *:data-[slot=icon]:col-start-1 *:data-[slot=icon]:row-start-1 *:data-[slot=icon]:mr-2.5 *:data-[slot=icon]:-ml-0.5 *:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:mr-2 sm:*:data-[slot=icon]:size-4 *:data-[slot=icon]:text-zinc-500 data-focus:*:data-[slot=icon]:text-white *:data-[slot=avatar]:mr-2.5 *:data-[slot=avatar]:-ml-1 *:data-[slot=avatar]:size-6 sm:*:data-[slot=avatar]:mr-2 sm:*:data-[slot=avatar]:size-5" onClick={() => handleSwitch(role)}>
          {role === activeRole ? <span className="font-bold">Current profile: {role}</span> : `Switch to ${role} profile`}
        </button>
      )
    })
  );
}