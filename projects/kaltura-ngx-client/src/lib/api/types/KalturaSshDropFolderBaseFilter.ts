
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRemoteDropFolderFilter, KalturaRemoteDropFolderFilterArgs } from './KalturaRemoteDropFolderFilter';

export interface KalturaSshDropFolderBaseFilterArgs  extends KalturaRemoteDropFolderFilterArgs {
    
}


export class KalturaSshDropFolderBaseFilter extends KalturaRemoteDropFolderFilter {

    

    constructor(data? : KalturaSshDropFolderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSshDropFolderBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSshDropFolderBaseFilter'] = KalturaSshDropFolderBaseFilter;