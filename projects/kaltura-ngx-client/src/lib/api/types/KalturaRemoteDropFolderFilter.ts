
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRemoteDropFolderBaseFilter, KalturaRemoteDropFolderBaseFilterArgs } from './KalturaRemoteDropFolderBaseFilter';

export interface KalturaRemoteDropFolderFilterArgs  extends KalturaRemoteDropFolderBaseFilterArgs {
    
}


export class KalturaRemoteDropFolderFilter extends KalturaRemoteDropFolderBaseFilter {

    

    constructor(data? : KalturaRemoteDropFolderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRemoteDropFolderFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRemoteDropFolderFilter'] = KalturaRemoteDropFolderFilter;