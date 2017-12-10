
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface GenericDistributionProviderActionAddMrssTransformFromFileActionArgs  extends KalturaUploadRequestArgs {
    id : number;
	xslFile : File;
}

/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addMrssTransformFromFile'.
 *
 * Usage: Add MRSS transform file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class GenericDistributionProviderActionAddMrssTransformFromFileAction extends KalturaUploadRequest<KalturaGenericDistributionProviderAction> {

    id : number;
	xslFile : File;

    constructor(data : GenericDistributionProviderActionAddMrssTransformFromFileActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGenericDistributionProviderAction', responseConstructor : KalturaGenericDistributionProviderAction  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'contentdistribution_genericdistributionprovideraction' },
				action : { type : 'c', default : 'addMrssTransformFromFile' },
				id : { type : 'n' },
				xslFile : { type : 'f' }
            }
        );
        return result;
    }
}

