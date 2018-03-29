
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';

export interface KalturaForensicWatermarkAdvancedFilterArgs  extends KalturaSearchItemArgs {
    watermarkId? : number;
}


export class KalturaForensicWatermarkAdvancedFilter extends KalturaSearchItem {

    watermarkId : number;

    constructor(data? : KalturaForensicWatermarkAdvancedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaForensicWatermarkAdvancedFilter' },
				watermarkId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaForensicWatermarkAdvancedFilter',KalturaForensicWatermarkAdvancedFilter);
