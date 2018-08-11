
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFilter, KalturaDropFolderFilterArgs } from './KalturaDropFolderFilter';

export interface KalturaRemoteDropFolderBaseFilterArgs  extends KalturaDropFolderFilterArgs {
    
}


export class KalturaRemoteDropFolderBaseFilter extends KalturaDropFolderFilter {

    

    constructor(data? : KalturaRemoteDropFolderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRemoteDropFolderBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRemoteDropFolderBaseFilter'] = KalturaRemoteDropFolderBaseFilter;