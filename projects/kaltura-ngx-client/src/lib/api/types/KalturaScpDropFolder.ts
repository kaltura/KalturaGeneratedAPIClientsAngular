
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSshDropFolder, KalturaSshDropFolderArgs } from './KalturaSshDropFolder';

export interface KalturaScpDropFolderArgs  extends KalturaSshDropFolderArgs {
    
}


export class KalturaScpDropFolder extends KalturaSshDropFolder {

    

    constructor(data? : KalturaScpDropFolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScpDropFolder' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaScpDropFolder'] = KalturaScpDropFolder;