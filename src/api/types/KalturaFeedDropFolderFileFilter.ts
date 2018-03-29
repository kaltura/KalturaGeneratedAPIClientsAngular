
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFeedDropFolderFileBaseFilter, KalturaFeedDropFolderFileBaseFilterArgs } from './KalturaFeedDropFolderFileBaseFilter';

export interface KalturaFeedDropFolderFileFilterArgs  extends KalturaFeedDropFolderFileBaseFilterArgs {
    
}


export class KalturaFeedDropFolderFileFilter extends KalturaFeedDropFolderFileBaseFilter {

    

    constructor(data? : KalturaFeedDropFolderFileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFeedDropFolderFileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFeedDropFolderFileFilter',KalturaFeedDropFolderFileFilter);
