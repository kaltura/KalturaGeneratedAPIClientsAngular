
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetServeOptions, KalturaAssetServeOptionsArgs } from './KalturaAssetServeOptions';

export interface KalturaThumbnailServeOptionsArgs  extends KalturaAssetServeOptionsArgs {
    
}


export class KalturaThumbnailServeOptions extends KalturaAssetServeOptions {

    

    constructor(data? : KalturaThumbnailServeOptionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaThumbnailServeOptions' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaThumbnailServeOptions',KalturaThumbnailServeOptions);
