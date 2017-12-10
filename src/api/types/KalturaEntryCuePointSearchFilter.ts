
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';

export interface KalturaEntryCuePointSearchFilterArgs  extends KalturaSearchItemArgs {
    cuePointsFreeText? : string;
	cuePointTypeIn? : string;
	cuePointSubTypeEqual? : number;
}


export class KalturaEntryCuePointSearchFilter extends KalturaSearchItem {

    cuePointsFreeText : string;
	cuePointTypeIn : string;
	cuePointSubTypeEqual : number;

    constructor(data? : KalturaEntryCuePointSearchFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryCuePointSearchFilter' },
				cuePointsFreeText : { type : 's' },
				cuePointTypeIn : { type : 's' },
				cuePointSubTypeEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryCuePointSearchFilter',KalturaEntryCuePointSearchFilter);
