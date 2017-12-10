
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderFileBaseFilter, KalturaDropFolderFileBaseFilterArgs } from './KalturaDropFolderFileBaseFilter';

export interface KalturaDropFolderFileFilterArgs  extends KalturaDropFolderFileBaseFilterArgs {
    
}


export class KalturaDropFolderFileFilter extends KalturaDropFolderFileBaseFilter {

    

    constructor(data? : KalturaDropFolderFileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDropFolderFileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDropFolderFileFilter',KalturaDropFolderFileFilter);
