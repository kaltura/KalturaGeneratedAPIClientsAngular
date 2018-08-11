
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaWebexDropFolderBaseFilter, KalturaWebexDropFolderBaseFilterArgs } from './KalturaWebexDropFolderBaseFilter';

export interface KalturaWebexDropFolderFilterArgs  extends KalturaWebexDropFolderBaseFilterArgs {
    
}


export class KalturaWebexDropFolderFilter extends KalturaWebexDropFolderBaseFilter {

    

    constructor(data? : KalturaWebexDropFolderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWebexDropFolderFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWebexDropFolderFilter'] = KalturaWebexDropFolderFilter;