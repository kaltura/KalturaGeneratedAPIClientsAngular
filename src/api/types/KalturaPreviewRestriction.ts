
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSessionRestriction, KalturaSessionRestrictionArgs } from './KalturaSessionRestriction';

export interface KalturaPreviewRestrictionArgs  extends KalturaSessionRestrictionArgs {
    previewLength? : number;
}


export class KalturaPreviewRestriction extends KalturaSessionRestriction {

    previewLength : number;

    constructor(data? : KalturaPreviewRestrictionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPreviewRestriction' },
				previewLength : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPreviewRestriction',KalturaPreviewRestriction);
