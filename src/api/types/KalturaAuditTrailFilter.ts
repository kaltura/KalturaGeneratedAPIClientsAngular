
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAuditTrailBaseFilter, KalturaAuditTrailBaseFilterArgs } from './KalturaAuditTrailBaseFilter';

export interface KalturaAuditTrailFilterArgs  extends KalturaAuditTrailBaseFilterArgs {
    
}


export class KalturaAuditTrailFilter extends KalturaAuditTrailBaseFilter {

    

    constructor(data? : KalturaAuditTrailFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAuditTrailFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAuditTrailFilter',KalturaAuditTrailFilter);
