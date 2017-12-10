
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaContext, KalturaContextArgs } from './KalturaContext';

export interface KalturaEntryContextArgs  extends KalturaContextArgs {
    entryId? : string;
	followEntryRedirect? : KalturaNullableBoolean;
}


export class KalturaEntryContext extends KalturaContext {

    entryId : string;
	followEntryRedirect : KalturaNullableBoolean;

    constructor(data? : KalturaEntryContextArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryContext' },
				entryId : { type : 's' },
				followEntryRedirect : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryContext',KalturaEntryContext);
