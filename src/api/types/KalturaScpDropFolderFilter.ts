
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScpDropFolderBaseFilter, KalturaScpDropFolderBaseFilterArgs } from './KalturaScpDropFolderBaseFilter';

export interface KalturaScpDropFolderFilterArgs  extends KalturaScpDropFolderBaseFilterArgs {
    
}


export class KalturaScpDropFolderFilter extends KalturaScpDropFolderBaseFilter {

    

    constructor(data? : KalturaScpDropFolderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScpDropFolderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScpDropFolderFilter',KalturaScpDropFolderFilter);
