
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderFileFilter, KalturaDropFolderFileFilterArgs } from './KalturaDropFolderFileFilter';

export interface KalturaWebexDropFolderFileBaseFilterArgs  extends KalturaDropFolderFileFilterArgs {
    
}


export class KalturaWebexDropFolderFileBaseFilter extends KalturaDropFolderFileFilter {

    

    constructor(data? : KalturaWebexDropFolderFileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWebexDropFolderFileBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWebexDropFolderFileBaseFilter',KalturaWebexDropFolderFileBaseFilter);
