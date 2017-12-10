
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderFilter, KalturaDropFolderFilterArgs } from './KalturaDropFolderFilter';

export interface KalturaRemoteDropFolderBaseFilterArgs  extends KalturaDropFolderFilterArgs {
    
}


export class KalturaRemoteDropFolderBaseFilter extends KalturaDropFolderFilter {

    

    constructor(data? : KalturaRemoteDropFolderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRemoteDropFolderBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRemoteDropFolderBaseFilter',KalturaRemoteDropFolderBaseFilter);
