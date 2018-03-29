
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderFileFilter, KalturaDropFolderFileFilterArgs } from './KalturaDropFolderFileFilter';

export interface KalturaFeedDropFolderFileBaseFilterArgs  extends KalturaDropFolderFileFilterArgs {
    
}


export class KalturaFeedDropFolderFileBaseFilter extends KalturaDropFolderFileFilter {

    

    constructor(data? : KalturaFeedDropFolderFileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFeedDropFolderFileBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFeedDropFolderFileBaseFilter',KalturaFeedDropFolderFileBaseFilter);
