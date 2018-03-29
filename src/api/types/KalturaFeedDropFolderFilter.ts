
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFeedDropFolderBaseFilter, KalturaFeedDropFolderBaseFilterArgs } from './KalturaFeedDropFolderBaseFilter';

export interface KalturaFeedDropFolderFilterArgs  extends KalturaFeedDropFolderBaseFilterArgs {
    
}


export class KalturaFeedDropFolderFilter extends KalturaFeedDropFolderBaseFilter {

    

    constructor(data? : KalturaFeedDropFolderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFeedDropFolderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFeedDropFolderFilter',KalturaFeedDropFolderFilter);
