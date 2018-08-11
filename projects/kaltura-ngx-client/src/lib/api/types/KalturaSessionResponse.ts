
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaStartWidgetSessionResponse, KalturaStartWidgetSessionResponseArgs } from './KalturaStartWidgetSessionResponse';

export interface KalturaSessionResponseArgs  extends KalturaStartWidgetSessionResponseArgs {
    
}


export class KalturaSessionResponse extends KalturaStartWidgetSessionResponse {

    

    constructor(data? : KalturaSessionResponseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSessionResponse' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSessionResponse'] = KalturaSessionResponse;