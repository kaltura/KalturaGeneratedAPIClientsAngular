
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaContextTypeHolder, KalturaContextTypeHolderArgs } from './KalturaContextTypeHolder';

export interface KalturaAccessControlContextTypeHolderArgs  extends KalturaContextTypeHolderArgs {
    
}


export class KalturaAccessControlContextTypeHolder extends KalturaContextTypeHolder {

    

    constructor(data? : KalturaAccessControlContextTypeHolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControlContextTypeHolder' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAccessControlContextTypeHolder'] = KalturaAccessControlContextTypeHolder;