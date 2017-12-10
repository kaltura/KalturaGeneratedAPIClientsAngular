
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFileAssetObjectType } from './KalturaFileAssetObjectType';
import { KalturaFileAssetStatus } from './KalturaFileAssetStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaFileAssetArgs  extends KalturaObjectBaseArgs {
    fileAssetObjectType? : KalturaFileAssetObjectType;
	objectId? : string;
	name? : string;
	systemName? : string;
	fileExt? : string;
}


export class KalturaFileAsset extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	fileAssetObjectType : KalturaFileAssetObjectType;
	objectId : string;
	name : string;
	systemName : string;
	fileExt : string;
	readonly version : number;
	readonly createdAt : number;
	readonly updatedAt : number;
	readonly status : KalturaFileAssetStatus;

    constructor(data? : KalturaFileAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFileAsset' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				fileAssetObjectType : { type : 'es', subTypeConstructor : KalturaFileAssetObjectType, subType : 'KalturaFileAssetObjectType' },
				objectId : { type : 's' },
				name : { type : 's' },
				systemName : { type : 's' },
				fileExt : { type : 's' },
				version : { type : 'n', readOnly : true },
				createdAt : { type : 'n', readOnly : true },
				updatedAt : { type : 'n', readOnly : true },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaFileAssetStatus, subType : 'KalturaFileAssetStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFileAsset',KalturaFileAsset);
