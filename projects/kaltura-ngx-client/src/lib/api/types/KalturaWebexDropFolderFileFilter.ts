
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaWebexDropFolderFileBaseFilter, KalturaWebexDropFolderFileBaseFilterArgs } from './KalturaWebexDropFolderFileBaseFilter';

export interface KalturaWebexDropFolderFileFilterArgs  extends KalturaWebexDropFolderFileBaseFilterArgs {
    
}


export class KalturaWebexDropFolderFileFilter extends KalturaWebexDropFolderFileBaseFilter {

    

    constructor(data? : KalturaWebexDropFolderFileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWebexDropFolderFileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWebexDropFolderFileFilter'] = KalturaWebexDropFolderFileFilter;