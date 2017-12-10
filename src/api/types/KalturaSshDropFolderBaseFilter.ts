
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaSshDropFolderBaseFilter',KalturaSshDropFolderBaseFilter);
