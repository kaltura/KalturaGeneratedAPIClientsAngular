
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSshDropFolderBaseFilter, KalturaSshDropFolderBaseFilterArgs } from './KalturaSshDropFolderBaseFilter';

export interface KalturaSshDropFolderFilterArgs  extends KalturaSshDropFolderBaseFilterArgs {
    
}


export class KalturaSshDropFolderFilter extends KalturaSshDropFolderBaseFilter {

    

    constructor(data? : KalturaSshDropFolderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSshDropFolderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSshDropFolderFilter',KalturaSshDropFolderFilter);
