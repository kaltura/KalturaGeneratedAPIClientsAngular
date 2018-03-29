
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderFilter, KalturaDropFolderFilterArgs } from './KalturaDropFolderFilter';

export interface KalturaFeedDropFolderBaseFilterArgs  extends KalturaDropFolderFilterArgs {
    
}


export class KalturaFeedDropFolderBaseFilter extends KalturaDropFolderFilter {

    

    constructor(data? : KalturaFeedDropFolderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFeedDropFolderBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFeedDropFolderBaseFilter',KalturaFeedDropFolderBaseFilter);
