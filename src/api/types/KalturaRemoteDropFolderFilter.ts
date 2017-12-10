
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaRemoteDropFolderFilter',KalturaRemoteDropFolderFilter);
