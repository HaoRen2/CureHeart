import { RoleEnums } from '../../common/enums/rol.enum';
export declare function Auth(role: RoleEnums): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
