export interface IConfirmationModel {
    title: string;
    body: string;
}

export class IServerResponse<T>{
    message: string;
    isSuccess: boolean;
    data: T;
    count: number;
}

export interface ICommonRow {
    id?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
