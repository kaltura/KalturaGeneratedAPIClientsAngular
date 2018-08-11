
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFileFilter, KalturaDropFolderFileFilterArgs } from './KalturaDropFolderFileFilter';

export interface KalturaWebexDropFolderFileBaseFilterArgs  extends KalturaDropFolderFileFilterArgs {
    
}


export class KalturaWebexDropFolderFileBaseFilter extends KalturaDropFolderFileFilter {

    

    constructor(data? : KalturaWebexDropFolderFileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWebexDropFolderFileBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWebexDropFolderFileBaseFilter'] = KalturaWebexDropFolderFileBaseFilter;