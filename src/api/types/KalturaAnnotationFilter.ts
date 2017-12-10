
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAnnotationBaseFilter, KalturaAnnotationBaseFilterArgs } from './KalturaAnnotationBaseFilter';

export interface KalturaAnnotationFilterArgs  extends KalturaAnnotationBaseFilterArgs {
    
}


export class KalturaAnnotationFilter extends KalturaAnnotationBaseFilter {

    

    constructor(data? : KalturaAnnotationFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAnnotationFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAnnotationFilter',KalturaAnnotationFilter);
