
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAmazonS3StorageProfileBaseFilter, KalturaAmazonS3StorageProfileBaseFilterArgs } from './KalturaAmazonS3StorageProfileBaseFilter';

export interface KalturaAmazonS3StorageProfileFilterArgs  extends KalturaAmazonS3StorageProfileBaseFilterArgs {
    
}


export class KalturaAmazonS3StorageProfileFilter extends KalturaAmazonS3StorageProfileBaseFilter {

    

    constructor(data? : KalturaAmazonS3StorageProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAmazonS3StorageProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAmazonS3StorageProfileFilter',KalturaAmazonS3StorageProfileFilter);
