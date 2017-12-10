
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAnnotation } from './KalturaAnnotation';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAnnotationListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaAnnotationListResponse extends KalturaListResponse {

    readonly objects : KalturaAnnotation[];

    constructor(data? : KalturaAnnotationListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAnnotationListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaAnnotation, subType : 'KalturaAnnotation' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAnnotationListResponse',KalturaAnnotationListResponse);
