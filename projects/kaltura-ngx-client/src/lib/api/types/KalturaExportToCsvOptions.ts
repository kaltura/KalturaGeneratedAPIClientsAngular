
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryType } from './KalturaEntryType';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaExportToCsvOptionsArgs  extends KalturaObjectBaseArgs {
    format? : string;
	typeEqual? : KalturaEntryType;
	defaultHeader? : KalturaNullableBoolean;
}


export class KalturaExportToCsvOptions extends KalturaObjectBase {

    format : string;
	typeEqual : KalturaEntryType;
	defaultHeader : KalturaNullableBoolean;

    constructor(data? : KalturaExportToCsvOptionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExportToCsvOptions' },
				format : { type : 's' },
				typeEqual : { type : 'es', subTypeConstructor : KalturaEntryType, subType : 'KalturaEntryType' },
				defaultHeader : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaExportToCsvOptions'] = KalturaExportToCsvOptions;