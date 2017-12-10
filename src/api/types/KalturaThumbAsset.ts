
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaThumbAssetStatus } from './KalturaThumbAssetStatus';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';

export interface KalturaThumbAssetArgs  extends KalturaAssetArgs {
    thumbParamsId? : number;
}


export class KalturaThumbAsset extends KalturaAsset {

    thumbParamsId : number;
	readonly width : number;
	readonly height : number;
	readonly status : KalturaThumbAssetStatus;

    constructor(data? : KalturaThumbAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaThumbAsset' },
				thumbParamsId : { type : 'n' },
				width : { type : 'n', readOnly : true },
				height : { type : 'n', readOnly : true },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaThumbAssetStatus, subType : 'KalturaThumbAssetStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaThumbAsset',KalturaThumbAsset);
