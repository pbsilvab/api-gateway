import { Client, Metadata } from "grpc";

// Devuelve una función que llama al método del cliente y devuelve una promesa (para no tener que usar el callback)
export const promisifyUnaryRequest = <ReqType, ResType= any> (client: any, method: string) => {
  return (req: ReqType, meta: Metadata): Promise<ResType> => new Promise((res, rej) =>
    client[method](req, meta, (err: any, data: ResType | PromiseLike<ResType> | undefined) => err ? rej(err) : res(data))
  );
}

// Devuelve `promisifyUnaryRequest` ya relacionada al cliente
export const promisifyUnaryRequestForClient = (client: Client) => {
  return <ReqType, RespType = any>(method: string) => promisifyUnaryRequest<ReqType, RespType>(client, method);
}