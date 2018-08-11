
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
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

typesMappingStorage['KalturaScpDropFolderBaseFilter'] = KalturaScpDropFolderBaseFilter;