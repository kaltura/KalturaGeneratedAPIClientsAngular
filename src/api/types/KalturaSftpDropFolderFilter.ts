
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaSftpDropFolderFilter',KalturaSftpDropFolderFilter);
