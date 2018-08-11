
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDataCenterContentResource, KalturaDataCenterContentResourceArgs } from './KalturaDataCenterContentResource';

export interface KalturaWebcamTokenResourceArgs  extends KalturaDataCenterContentResourceArgs {
    token? : string;
}


export class KalturaWebcamTokenResource extends KalturaDataCenterContentResource {

    token : string;

    constructor(data? : KalturaWebcamTokenResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWebcamTokenResource' },
				token : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWebcamTokenResource'] = KalturaWebcamTokenResource;