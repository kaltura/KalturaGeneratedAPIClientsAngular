
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSftpDropFolderBaseFilter, KalturaSftpDropFolderBaseFilterArgs } from './KalturaSftpDropFolderBaseFilter';

export interface KalturaSftpDropFolderFilterArgs  extends KalturaSftpDropFolderBaseFilterArgs {
    
}


export class KalturaSftpDropFolderFilter extends KalturaSftpDropFolderBaseFilter {

    

    constructor(data? : KalturaSftpDropFolderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSftpDropFolderFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSftpDropFolderFilter'] = KalturaSftpDropFolderFilter;