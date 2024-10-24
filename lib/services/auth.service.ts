import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET;

export const generateToken = (tokenData:any): string => {
    const token = jwt.sign({ ...tokenData }, secretKey!, { expiresIn: "4h" });
    return token;
};

export const authenticateToken = (token: string) => {
    try {
        const decodedToken: any = verifyToken(token);
        const currentTimestamp = Math.floor(Date.now() / 1000);

        if (decodedToken.exp && decodedToken.exp < currentTimestamp) {
            return { valid: false, userId: null };
        }

        return {
            valid: true,
            userId: decodedToken.userId,
            role: decodedToken.role,
            siteId: decodedToken.siteId,
            password: decodedToken.password,
        };
    } catch (error) {
        console.error("Error verifying token:", error);
        return { valid: false, userId: null };
    }
};

export const verifyToken = (token: string): string | null => {
    try {
        const decoded: any = jwt.verify(token, secretKey!);
        return decoded;
    } catch (error) {
        return null;
    }
};
