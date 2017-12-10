
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetArgs  extends KalturaObjectBaseArgs {
    tags? : string;
	fileExt? : string;
	partnerData? : string;
	partnerDescription? : string;
	actualSourceAssetParamsIds? : string;
}


export class KalturaAsset extends KalturaObjectBase {

    readonly id : string;
	readonly entryId : string;
	readonly partnerId : number;
	readonly version : number;
	readonly size : number;
	tags : string;
	fileExt : string;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly deletedAt : Date;
	readonly description : string;
	partnerData : string;
	partnerDescription : string;
	actualSourceAssetParamsIds : string;

    constructor(data? : KalturaAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAsset' },
				id : { type : 's', readOnly : true },
				entryId : { type : 's', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				version : { type : 'n', readOnly : true },
				size : { type : 'n', readOnly : true },
				tags : { type : 's' },
				fileExt : { type : 's' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				deletedAt : { type : 'd', readOnly : true },
				description : { type : 's', readOnly : true },
				partnerData : { type : 's' },
				partnerDescription : { type : 's' },
				actualSourceAssetParamsIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAsset',KalturaAsset);
