
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSshDropFolder, KalturaSshDropFolderArgs } from './KalturaSshDropFolder';

export interface KalturaSftpDropFolderArgs  extends KalturaSshDropFolderArgs {
    
}


export class KalturaSftpDropFolder extends KalturaSshDropFolder {

    

    constructor(data? : KalturaSftpDropFolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSftpDropFolder' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSftpDropFolder'] = KalturaSftpDropFolder;