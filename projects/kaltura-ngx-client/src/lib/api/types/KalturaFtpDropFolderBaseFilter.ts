
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRemoteDropFolderFilter, KalturaRemoteDropFolderFilterArgs } from './KalturaRemoteDropFolderFilter';

export interface KalturaFtpDropFolderBaseFilterArgs  extends KalturaRemoteDropFolderFilterArgs {
    
}


export class KalturaFtpDropFolderBaseFilter extends KalturaRemoteDropFolderFilter {

    

    constructor(data? : KalturaFtpDropFolderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFtpDropFolderBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFtpDropFolderBaseFilter'] = KalturaFtpDropFolderBaseFilter;