
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSshDropFolderFilter, KalturaSshDropFolderFilterArgs } from './KalturaSshDropFolderFilter';

export interface KalturaScpDropFolderBaseFilterArgs  extends KalturaSshDropFolderFilterArgs {
    
}


export class KalturaScpDropFolderBaseFilter extends KalturaSshDropFolderFilter {

    

    constructor(data? : KalturaScpDropFolderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScpDropFolderBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScpDropFolderBaseFilter',KalturaScpDropFolderBaseFilter);
