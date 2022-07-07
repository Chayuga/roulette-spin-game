export interface PrizeMeta {
    images?: {
        primary?: string;
    };
    colours?: {
        primary?: string;
        secondary?: string;
        tertiary?: string;
    };
    additionalInformation?: string;
}
export interface Prize {
    id: string;
    name: string;
    description: string;
    meta?: PrizeMeta;
}

