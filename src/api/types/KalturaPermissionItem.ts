
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermissionItemType } from './KalturaPermissionItemType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPermissionItemArgs  extends KalturaObjectBaseArgs {
    tags? : string;
}


export class KalturaPermissionItem extends KalturaObjectBase {

    readonly id : number;
	readonly type : KalturaPermissionItemType;
	readonly partnerId : number;
	tags : string;
	readonly createdAt : Date;
	readonly updatedAt : Date;

    constructor(data? : KalturaPermissionItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermissionItem' },
				id : { type : 'n', readOnly : true },
				type : { type : 'es', readOnly : true, subTypeConstructor : KalturaPermissionItemType, subType : 'KalturaPermissionItemType' },
				partnerId : { type : 'n', readOnly : true },
				tags : { type : 's' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPermissionItem',KalturaPermissionItem);
