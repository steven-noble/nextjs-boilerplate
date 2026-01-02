import Image from "next/image"

import { getDisplayName } from "@lib/services/user.services";
import { UserProfileTypes } from "@lib/types";

export default function Avatar({ profile }: { profile: UserProfileTypes }) {
  return (
    <div className="shrink-0 size-8 rounded-full overflow-hidden bg-gray-400">
      {profile.avatar_url && <Image
        src={profile.avatar_url}
        alt={`${getDisplayName(profile)}'s profile picture`}
        width={32}
        height={32}
        className="w-full"
      />}

      {!profile.avatar_url && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        className="text-white stroke-current w-[32px] h-[32px] p-1">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
      </svg>}
    </div>
  );
}