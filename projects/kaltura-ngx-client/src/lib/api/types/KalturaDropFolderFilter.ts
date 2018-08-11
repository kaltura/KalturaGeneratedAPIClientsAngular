
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaDropFolderBaseFilter, KalturaDropFolderBaseFilterArgs } from './KalturaDropFolderBaseFilter';

export interface KalturaDropFolderFilterArgs  extends KalturaDropFolderBaseFilterArgs {
    currentDc? : KalturaNullableBoolean;
}


export class KalturaDropFolderFilter extends KalturaDropFolderBaseFilter {

    currentDc : KalturaNullableBoolean;

    constructor(data? : KalturaDropFolderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDropFolderFilter' },
				currentDc : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDropFolderFilter'] = KalturaDropFolderFilter;