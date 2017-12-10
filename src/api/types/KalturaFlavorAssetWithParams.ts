
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaFlavorParams } from './KalturaFlavorParams';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaFlavorAssetWithParamsArgs  extends KalturaObjectBaseArgs {
    flavorAsset? : KalturaFlavorAsset;
	flavorParams? : KalturaFlavorParams;
	entryId? : string;
}


export class KalturaFlavorAssetWithParams extends KalturaObjectBase {

    flavorAsset : KalturaFlavorAsset;
	flavorParams : KalturaFlavorParams;
	entryId : string;

    constructor(data? : KalturaFlavorAssetWithParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFlavorAssetWithParams' },
				flavorAsset : { type : 'o', subTypeConstructor : KalturaFlavorAsset, subType : 'KalturaFlavorAsset' },
				flavorParams : { type : 'o', subTypeConstructor : KalturaFlavorParams, subType : 'KalturaFlavorParams' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFlavorAssetWithParams',KalturaFlavorAssetWithParams);
