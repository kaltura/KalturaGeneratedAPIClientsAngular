
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSshDropFolderFilter, KalturaSshDropFolderFilterArgs } from './KalturaSshDropFolderFilter';

export interface KalturaSftpDropFolderBaseFilterArgs  extends KalturaSshDropFolderFilterArgs {
    
}


export class KalturaSftpDropFolderBaseFilter extends KalturaSshDropFolderFilter {

    

    constructor(data? : KalturaSftpDropFolderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSftpDropFolderBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSftpDropFolderBaseFilter'] = KalturaSftpDropFolderBaseFilter;