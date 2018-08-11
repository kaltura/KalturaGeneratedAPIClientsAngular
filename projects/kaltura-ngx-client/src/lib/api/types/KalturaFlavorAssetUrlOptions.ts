
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaFlavorAssetUrlOptionsArgs  extends KalturaObjectBaseArgs {
    fileName? : string;
	referrer? : string;
}


export class KalturaFlavorAssetUrlOptions extends KalturaObjectBase {

    fileName : string;
	referrer : string;

    constructor(data? : KalturaFlavorAssetUrlOptionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFlavorAssetUrlOptions' },
				fileName : { type : 's' },
				referrer : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFlavorAssetUrlOptions'] = KalturaFlavorAssetUrlOptions;