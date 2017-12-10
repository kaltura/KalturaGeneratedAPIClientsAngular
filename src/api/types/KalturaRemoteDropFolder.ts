
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolder, KalturaDropFolderArgs } from './KalturaDropFolder';

export interface KalturaRemoteDropFolderArgs  extends KalturaDropFolderArgs {
    
}


export class KalturaRemoteDropFolder extends KalturaDropFolder {

    

    constructor(data? : KalturaRemoteDropFolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRemoteDropFolder' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRemoteDropFolder',KalturaRemoteDropFolder);
