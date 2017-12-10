
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStorageProfileFilter, KalturaStorageProfileFilterArgs } from './KalturaStorageProfileFilter';

export interface KalturaAmazonS3StorageProfileBaseFilterArgs  extends KalturaStorageProfileFilterArgs {
    
}


export class KalturaAmazonS3StorageProfileBaseFilter extends KalturaStorageProfileFilter {

    

    constructor(data? : KalturaAmazonS3StorageProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAmazonS3StorageProfileBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAmazonS3StorageProfileBaseFilter',KalturaAmazonS3StorageProfileBaseFilter);
